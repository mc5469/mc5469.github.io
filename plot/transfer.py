import pandas as pd

# 读取Excel文件
df = pd.read_excel('immigrantdata.xlsx')

# 将数据保存为JSON文件
df.to_json('immigrantdata.json', orient='records', lines=True)