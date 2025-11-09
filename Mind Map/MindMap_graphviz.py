from graphviz import Digraph

# Create a new directed graph
dot = Digraph(comment='Python Mind Map')

# Adding nodes
dot.node('A', 'Basics')
dot.node('B', 'Control Flow')
dot.node('C', 'Data Structures')
dot.node('D', 'Functions')
dot.node('E', 'OOP')
dot.node('F', 'Modules & Packages')

# Adding edges (relationships)
dot.edges(['AB', 'BC', 'CD', 'DE', 'EA'])  # Directional relationships
dot.edge('C', 'A', constraint='false')     # Interconnected relationships
dot.edge('F', 'A', constraint='false')
dot.edge('F', 'B', constraint='false')
dot.edge('F', 'C', constraint='false')
dot.edge('F', 'D', constraint='false')
dot.edge('F', 'E', constraint='false')

# Render Mind Map to file and view it
dot.render('python_mindmap.gv', view=True)
