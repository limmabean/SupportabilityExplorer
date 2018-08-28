import csv

indent = " " * 4

with open('sunburst.csv', 'rb') as csvfile:
    spamreader = csv.reader(csvfile, delimiter=' ', quotechar='|')
    for row in spamreader:
        for col in spamreader:
        	print i++

