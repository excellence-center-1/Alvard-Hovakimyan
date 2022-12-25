def recursive_reverse(some_list):
    if len(some_list) == 0: 
        return []
    return [some_list[-1]] + recursive_reverse(some_list[:-1])
reversed_list = recursive_reverse([1, 2, 3])
print(*reversed_list)
