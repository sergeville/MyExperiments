def get_even_numbers(numbers):
    """
    Takes a list of numbers and returns only the even numbers.
    
    Args:
        numbers: A list of numeric values (int or float)
        
    Returns:
        list: A list containing only the even numbers from the input
        
    Raises:
        TypeError: If input is not a list or contains non-numeric values
        ValueError: If input is an empty list
    """
    # Check if input is a list
    if not isinstance(numbers, list):
        raise TypeError(f"Expected a list, but got {type(numbers).__name__}")
    
    # Check if list is empty
    if len(numbers) == 0:
        raise ValueError("Input list cannot be empty")
    
    even_numbers = []
    
    for i, num in enumerate(numbers):
        # Check if element is numeric
        if not isinstance(num, (int, float)):
            raise TypeError(f"Element at index {i} is not a number: {num} (type: {type(num).__name__})")
        
        # Check if number is even (only for integers or whole floats)
        if isinstance(num, int) or num.is_integer():
            if int(num) % 2 == 0:
                even_numbers.append(num)
    
    return even_numbers


# Example usage and testing
if __name__ == "__main__":
    # Test case 1: Normal list with mixed numbers
    try:
        numbers1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
        result1 = get_even_numbers(numbers1)
        print(f"Input: {numbers1}")
        print(f"Even numbers: {result1}")
        print()
    except (TypeError, ValueError) as e:
        print(f"Error: {e}\n")
    
    # Test case 2: List with floats
    try:
        numbers2 = [1.5, 2.0, 3.0, 4.0, 5.7, 6.0]
        result2 = get_even_numbers(numbers2)
        print(f"Input: {numbers2}")
        print(f"Even numbers: {result2}")
        print()
    except (TypeError, ValueError) as e:
        print(f"Error: {e}\n")
    
    # Test case 3: Empty list (should raise ValueError)
    try:
        numbers3 = []
        result3 = get_even_numbers(numbers3)
        print(f"Input: {numbers3}")
        print(f"Even numbers: {result3}")
        print()
    except (TypeError, ValueError) as e:
        print(f"Error: {e}\n")
    
    # Test case 4: Non-list input (should raise TypeError)
    try:
        numbers4 = "not a list"
        result4 = get_even_numbers(numbers4)
        print(f"Input: {numbers4}")
        print(f"Even numbers: {result4}")
        print()
    except (TypeError, ValueError) as e:
        print(f"Error: {e}\n")
    
    # Test case 5: List with non-numeric values (should raise TypeError)
    try:
        numbers5 = [1, 2, "three", 4, 5]
        result5 = get_even_numbers(numbers5)
        print(f"Input: {numbers5}")
        print(f"Even numbers: {result5}")
        print()
    except (TypeError, ValueError) as e:
        print(f"Error: {e}\n")
    
    # Test case 6: Negative numbers
    try:
        numbers6 = [-4, -3, -2, -1, 0, 1, 2, 3, 4]
        result6 = get_even_numbers(numbers6)
        print(f"Input: {numbers6}")
        print(f"Even numbers: {result6}")
        print()
    except (TypeError, ValueError) as e:
        print(f"Error: {e}\n")
