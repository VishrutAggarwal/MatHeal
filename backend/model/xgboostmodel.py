import pandas as pd
import numpy as np
from sklearn.metrics import accuracy_score, r2_score
from sklearn.preprocessing import LabelEncoder
from sklearn.model_selection import train_test_split
import pickle
from xgboost import XGBClassifier

df = pd.read_csv("Maternal Health Risk Data Set.csv")
df['RiskLevel'].replace({"high risk":"3", "mid risk":"2", "low risk":"1"}, inplace=True)

df=np.array(df)

x=df[1:, 0:-1]
y=df[1:, -1]
y=y.astype('int')
x=x.astype('int')

x_train, x_test, y_train, y_test = train_test_split(x, y, test_size=0.3, random_state=0)

LE = LabelEncoder()
y_train = LE.fit_transform(y_train)

#XGBoost Classifier

model = XGBClassifier()
model.fit(x_train, y_train)
y_pred = model.predict(x_test)
y_pred1 = [i+1 for i in y_pred]
xg_result=pd.DataFrame({'Id': (pd.DataFrame(x_test)).index, 'Predicted risk': y_pred1, 'Actual risk': y_test})
print(xg_result)
print(accuracy_score(y_test, y_pred1))
print(r2_score(y_test, y_pred1))
filename = 'xgb.pkl'
pickle.dump(model, open(filename,'wb'))