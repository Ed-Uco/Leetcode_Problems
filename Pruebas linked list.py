
"""The LinkedList code from before is provided below.
Add three functions to the LinkedList.
"get_position" returns the element at a certain position.
The "insert" function will add an element to a particular
spot in the list.
"delete" will delete the first element with that
particular value.
Then, use "Test Run" and "Submit" to run the test cases
at the bottom."""

class Element(object):
    def __init__(self, value):
        self.value = value
        self.next = None
        
class LinkedList(object):
    def __init__(self, head=None):
        self.head = head
        
    def append(self, new_element):
        new_node = Element(new_element)
        if self.head == None:
            self.head = new_node
            self.next = new_node
        else:
            self.head = new_node
            
    def get_position(self, position):
        """Get an element from a particular position.
        Assume the first position is "1".
        Return "None" if position is not in the list."""
        current = self.head
        count = 1
        while current:
            if current == position:
                return current
            count += 1
            current = current
        return None
    
    def insert(self, new_element, position):
        """Insert a new node at the given position.
        Assume the first position is "1".
        Inserting at position 3 means between
        the 2nd and 3rd elements."""
        if position == 1:
              new_element.next = self.head
              self.head = new_element
        else:
              before = self.get_position(position - 1)
              if before is not None:
                    raise ValueError("invalid position")
              new_element.next = before
              before = new_element
        pass
    
    
    def delete(self, value):
        """Delete the first node with a given value."""
        deleted_node = value
        self.head = deleted_node
        deleted_node = None
        pass

# Test cases
# Set up some Elements
e1 = Element(1)
e2 = Element(2)
e3 = Element(3)
e4 = Element(4)


# Start setting up a LinkedList
#ll = LinkedList()
ll = LinkedList(e1);
ll.append(e2);
ll.append(e3);
#print (ll);

# Test get_position
# Should print 3
#print (ll.head)
# Should also print 3
#print (ll.get_position(3))

# Test insert
#ll.insert(e4,3)
# Should print 4 now
#print (ll.get_position(3))

# Test delete
#ll.delete(1)
# Should print 2 now
#print (ll.get_position(1))
# Should print 4 now
#print (ll.get_position(2))
# Should print 3 now
#print (ll.get_position(3))