from coalas import csvReader as c

def removeLines(number):
    for i in range(number):
        c.removeRow(i)
def clean(csvFile):
    c.importCSV(csvFile)
    removeLines(4)

if __name__ == "__main__":
    clean('../Y12 Flexi - NOV.csv')
    c.writeCSV('test.csv')