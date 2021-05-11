import random
name = 'Devora'
address = '14449 east carroll blvd'
sibling = ['Tzvi', 'Yitzy', 'Miri', 'Yaakov']
print(sibling)
print(f'this is the info {name}, {address}/n these are my siblings: {sibling}')
print(name[2:3:])
print(sibling[-2][1:-1])
inner_numbers = [1,2,3,4,5,6,7,8,9,10]
outer_numbers = [1,2,3,4,5,6,7,8,9,10]
for x in outer_numbers:
  for y in inner_numbers:
    print(x*y)
list_1 = inner_numbers = [1,2,3,4,5,6,7,8,9,10]
number = random.choice(list_1)
still_loosing = True
while still_loosing == True:
    try:
        guess = int(input('What is your guess? '))
        if guess == number:
            print('hurray!!!!! you won!!!!')
            still_loosing = False
        else: 
             print('try again')
    except ValueError as e:
        print('Ahem! Please enter a valid number between 1-10!')
