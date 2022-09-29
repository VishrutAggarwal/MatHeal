import json
import re as RegEx
import os
import random
import time

# Debug Flag
DEBUG = False

# Getting this Script's Directory
ScriptDirectory = os.path.dirname(os.path.realpath(__file__))
# Setting JSON File Paths
ConversationJSONFilePath = ScriptDirectory + "/bot.json"
BotDataJSONFilePath = ScriptDirectory + "/data.json"

# UTC Time
def get_time_in_utc():
    return time.time()

# Loading and Writing JSON
def load_json(file):
    with open(file) as bot_responses:
        if DEBUG:
            print(f"Loaded '{file}' successfully for Reading!")
        return json.load(bot_responses)

def write_json(file, json_object):
    with open(file, "w") as bot_responses:
        if DEBUG:
            print(f"Loaded '{file}' successfully for Writing!")
        json.dump(json_object, bot_responses, indent=4)
        
# Store JSON data
ResponseData = load_json(ConversationJSONFilePath)
BotData = load_json(BotDataJSONFilePath)

# Bot Class
class Bot:


    # Initialize Bot
    def __init__(self):
        # Check if Bot needs to be First-Time Initialized (When App is Started for the First Time by a User)
        IsInitialised = BotData["is_initialised"]
        if not IsInitialised:
            # Do a Check-in on Mother on First Run
            BotData["check_in_schedule"]["last_check_in_day_by_utc"] = 0.0#get_time_in_utc()
            BotData["is_initialised"] = True
            write_json(BotDataJSONFilePath, BotData)


    # Get Response Based on User Input
    def get_response(self, input_string):
        # Splitting Words by using Regular Expression - Removing Spaces and Punctuations
        split_message = RegEx.split(r'\s+|[,;?!.-]\s*', input_string.lower())
        score_list = []

        # Check all the responses
        for response in ResponseData:
            response_score = 0
            required_score = 0
            required_words = response["required_words"]

            # Check if there are any required words
            if required_words:
                for word in split_message:
                    if word in required_words:
                        required_score += 1

            # Amount of required words should match the required score
            NumOfRequiredWords = len(required_words)
            Passed = False
            if NumOfRequiredWords > 0:
                Passed = (required_score / NumOfRequiredWords) * 100 > 10 # More than 10 % Required Words
            else:
                Passed = True
            if Passed:
                # Check each word the user has typed
                for word in split_message:
                    # If the word is in the response, add to the score
                    if word in response["user_input"]:
                        response_score += 1

            # Add score to list
            score_list.append(response_score)

        # Find the best response and return it if they're not all 0
        best_response = max(score_list)
        response_index = score_list.index(best_response)

        # Check if input is empty
        if input_string == "":
            return "Please type something so we can chat."

        # If there is no good response, return a random one.
        if best_response != 0:
            return ResponseData[response_index]["bot_response"]

        return self.default_response()


    # Respond with a Default Messege when User Input Cannot be Understood
    def default_response(self) -> str:
        RandomList = [
        "Oh! It appears you wrote something I don't understand yet",
        "I'm terribly sorry, I didn't quite catch that."
        ]

        Count = len(RandomList)
        RandomItem = random.randrange(Count)

        return RandomList[RandomItem]
    
    def set_check_in_frequency(self, FrequencyInDays):
        if FrequencyInDays < 0.0:
            print(f"Bot Warning: Frequency not set to '{FrequencyInDays}'. Value is Invalid.")
            return
        BotData["check_in_schedule"]["frequency_per_day"] = FrequencyInDays
        write_json(BotDataJSONFilePath, BotData)


    def check_in_on_mother(self):
        LastCheckin = BotData["check_in_schedule"]["last_check_in_day_by_utc"]
        Freq = BotData["check_in_schedule"]["frequency_per_day"]
        
        # Check if its Time for a Checkin
        utc = get_time_in_utc()
        NumOfDaysSinceEpoch = utc / 86400.0    
        NumOfDaysElapsed = NumOfDaysSinceEpoch - LastCheckin

        ShouldPerformCheckin = NumOfDaysElapsed >= Freq
        
        # Do Checkin in Seconds for Debug
        if DEBUG:
            NumOfSecondsElapsed = utc - (LastCheckin * 86400)
            ShouldPerformCheckin = NumOfSecondsElapsed >= Freq

        if ShouldPerformCheckin:
            # Update Checked in Day to Today
            BotData["check_in_schedule"]["last_check_in_day_by_utc"] = NumOfDaysSinceEpoch
            write_json(BotDataJSONFilePath, BotData)
            
            # Send Messege
            RandomList = [
            "Hope you are Having a Good Day! How have you been doing?",
            "Hello! Hope you have been eating well. You can talk to me about anything, I'm always here to help!",
            "Hey there! Tell me about your day, how have you been feeling?"
            ]

            Count = len(RandomList)
            RandomItem = random.randrange(Count)

            return RandomList[RandomItem]
            
        return ""


# UNCOMMENT THIS SNIPPET TO TEST BOT
MyBot = Bot()
while True:
    Messege = MyBot.check_in_on_mother()
    if Messege != "":
        print('Bot: ', Messege)
    else:
        Input = input('You: ')
        print('Bot: ', MyBot.get_response(Input))
