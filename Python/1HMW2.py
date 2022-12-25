def recursive_len(some_list):
     if some_list:
         return 1 + recursive_len(some_list[1:])
     return 0
print("Len in your list :",recursive_len([2,4,5]))
