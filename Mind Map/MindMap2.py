import networkx as nx
import matplotlib.pyplot as plt

# Define the level 3 mind map data
mind_map = {
    "Mind Mapping Levels": {
        "Level 0: Note Taking": {
            "Characteristics": [
                "Linear",
                "Wordy",
                "Superficial",
                "Highlighting/Annotating",
                "Time-consuming"
            ],
            "Processes to Improve": [
                "Avoid full sentences",
                "Summarize more",
                "Represent spatially"
            ]
        },
        "Level 1: Basic Mind Mapping": {
            "Characteristics": [
                "Non-linear Ideas",
                "Connections via Lines/Arrows"
            ],
            "Processes to Improve": [
                "Use lines over sentences",
                "Summarize concisely",
                "Represent without words"
            ]
        },
        "Level 2: Intermediate Mind Mapping": {
            "Characteristics": [
                "Grouped Information",
                "Clearer Flow/Structure"
            ],
            "Processes to Improve": [
                "Identify similarities",
                "Structure information flow",
                "Create intentional structure"
            ]
        },
        "Level 3: Advanced Mind Mapping": {
            "Characteristics": [
                "Clear Structure/Flow",
                "Emphasized Groups/Arrows",
                "Intuitive Groups"
            ],
            "Processes to Improve": [
                "Improve quality of connections",
                "Intuitive group formation",
                "Identify and choose best structure"
            ]
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
plt.figure(figsize=(14, 10))
pos = nx.spring_layout(G, seed=42)  # Layout for positioning nodes

# Draw nodes and edges with labels
nx.draw(G, pos, with_labels=True, node_size=3000, node_color="skyblue",
        font_size=10, font_weight="bold", edge_color="gray")

# Title for the graph
plt.title("Mind Mapping Levels")

# Display the graph
plt.show()
