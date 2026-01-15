import networkx as nx
import matplotlib.pyplot as plt

# Define the level 3 mind map data
mind_map = {
    "Online Free Car Parts Catalog & Diagrams": {
        "User Interface": {
            "Navigation": ["Search Bar", "Categories Menu", "Filters"],
            "Account Management": ["Login/Register", "Profile Settings", "Order History"]
        },
        "Car Parts Categories": {
            "Engine Components": ["Cylinder Block", "Pistons", "Valve Train"],
            "Transmission Parts": ["Gearbox", "Clutch", "Drive Shaft"],
            "Suspension System": ["Springs", "Shock Absorbers", "Control Arms"],
            "Brake System": ["Brake Pads", "Rotors", "Calipers"],
            "Electrical Components": ["Battery", "Alternator", "Wiring Harness"],
            "Body Parts": ["Doors", "Bumpers", "Windshields"]
        },
        "Diagrams and Schematics": {
            "Engine Diagrams": ["Exploded View", "Electrical Diagram", "Cooling System Diagram"]
        }
    }
}

# Create a new graph
G = nx.Graph()

# Function to add edges to the graph


def add_edges(node, subnodes):
    for subnode, details in subnodes.items():
        G.add_edge(node, subnode)
        if isinstance(details, dict):
            add_edges(subnode, details)
        elif isinstance(details, list):
            for item in details:
                G.add_edge(subnode, item)


# Add edges starting from the root
root = list(mind_map.keys())[0]
add_edges(root, mind_map[root])

# Draw the graph
plt.figure(figsize=(12, 8))
pos = nx.spring_layout(G, seed=42)

# Draw nodes and edges with labels
nx.draw(G, pos, with_labels=True, node_size=3000, node_color="skyblue",
        font_size=10, font_weight="bold", edge_color="gray")
plt.title("Online Free Car Parts Catalog & Diagrams Mind Map")
plt.show()
