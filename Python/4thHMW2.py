def rec_linear_sum(some_list):
    if len(some_list)==0:
        return 0
    return some_list[0] + rec_linear_sum(some_list[1:]) 

print(rec_linear_sum([]))

print(rec_linear_sum([3,5,8]))
