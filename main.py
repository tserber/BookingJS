""""
Write a Python function that print the minimum key and value from the following dictionary:
"""

def seek_for_minimum_dict_value(dictionary):
	min_value = float(dictionary[list(dictionary.keys())[0]])
	for key in dictionary:
		if float(dictionary[key]) < min_value:
			min_key = key
			min_value = dictionary[key]

	return [min_key, min_value]

Numbers = {
	"number_1": "10.5",
	"number_2": 20,
	"number_3": 3.5
}

print(minimum_dict_key_and_value(Numbers))
