from coalas import csvReader as c 
c.importCSV('Y13.csv')
c.printHeaders()
temp=[]
for i in range(len(c.Date)):
    if len(temp)==5:
        print(f'{temp},')
        temp=[]
        temp.append(c.Date[i])
    else:
        temp.append(c.Date[i])

