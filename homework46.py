from typing import DefaultDict


class die:
    def __init__(self, side):
       self.side = side

    def roll(self):
      import random
      result = random.randint(1, self.side)
      print(result)

new_die = die(7)
new_die.roll()

       
class six_sided_die(die):
     def __init__(self):
         super().__init__(6)
new_6_die = six_sided_die(7)
new_6_die.roll()

 
