month_names = ["Jan", "Feb", "Mar","Apr", "May","Jun","July","Aug", "Sept", "Oct", "Nov", "Dec"]
months_dates = ["31", "28", "31", "30","31","30","31","31", "30", "31", "30","31"]
def printer(months, dates):
    for i, j in zip(months, dates):
            print(i, j)
    
printer(month_names, months_dates)
month_names = ("Jan", "Feb", "Mar","Apr", "May","Jun","July","Aug", "Sept", "Oct", "Nov", "Dec")
months_dates = ("31", "28", "31", "30","31","30","31","31", "30", "31", "30","31")


key_pair_dict = {"Jan": 31, "Feb": 28, "Mar": 31,"Apr": 30, "May": 31,"Jun": 30,"July": 31,"Aug": 31, "Sept": 30, "Oct": 31, "Nov": 30, "Dec": 31}
 
for k in key_pair_dict:
    print( k, key_pair_dict[k])

def printer(month):
    index = month_names.index(month)
    days = months_dates[index]   
    return days

print(printer("Feb"))