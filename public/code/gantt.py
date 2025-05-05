import pandas as pd
import matplotlib.pyplot as plt

# Define raw tasks
tasks = [
    {"Task": "Discovery & data gathering", "StartWeek": 1, "DurationWeeks": 1, "Type": "Internal"},
    {"Task": "Root cause analysis & system logs review", "StartWeek": 1, "DurationWeeks": 2, "Type": "Internal"},
    {"Task": "Process design & workflow mapping", "StartWeek": 1, "DurationWeeks": 3, "Type": "Internal"},
    {"Task": "Form & workflow creation", "StartWeek": 2, "DurationWeeks": 3, "Type": "Internal"},
    {"Task": "Knowledge Base & training material", "StartWeek": 3, "DurationWeeks": 2, "Type": "Internal"},
    {"Task": "Agent training & dry runs", "StartWeek": 5, "DurationWeeks": 1, "Type": "Cross-functional"},
    {"Task": "Executive sign-off", "StartWeek": 5, "DurationWeeks": 1, "Type": "Internal"},
    {"Task": "Soft launch", "StartWeek": 6, "DurationWeeks": 2, "Type": "Internal"},
    {"Task": "Full launch (in production for 16+ months)", "StartWeek": 6, "DurationWeeks": 3, "Type": "Internal"},
    {"Task": "Ongoing monitoring & manual intervention", "StartWeek": 7, "DurationWeeks": 3, "Type": "Internal"},
    {"Task": "Alignment with AM for Vendor Reconciliation", "StartWeek": 9, "DurationWeeks": 1, "Type": "Cross-functional"},
    {"Task": "Alignment with Finance for Vendor Reconciliation", "StartWeek": 9, "DurationWeeks": 1, "Type": "Cross-functional"},
    {"Task": "Prioritize PayPal fix in Finance Roadmap", "StartWeek": 10, "DurationWeeks": 1, "Type": "Cross-functional"},
    
]

# Step 1: Create DataFrame
df = pd.DataFrame(tasks)

# Step 2: Identify all weeks used (start to end) to reindex without gaps
df["EndWeek"] = df["StartWeek"] + df["DurationWeeks"] - 1
used_weeks = sorted(set(week for _, row in df.iterrows() for week in range(row["StartWeek"], row["EndWeek"] + 1)))
week_map = {old: new + 1 for new, old in enumerate(used_weeks)}  # map to compressed weeks

# Step 3: Apply new StartWeek
df["CompressedStart"] = df["StartWeek"].map(week_map)

# Plot setup
color_map = {
    "Internal": "skyblue",
    "Cross-functional": "orange",
}
fig, ax = plt.subplots(figsize=(12, 7))
for _, row in df.iterrows():
    ax.barh(row["Task"], row["DurationWeeks"], left=row["CompressedStart"], color=color_map[row["Type"]])

# Axis setup
compressed_weeks = sorted(set(df["CompressedStart"]) | set(df["CompressedStart"] + df["DurationWeeks"] - 1))
ax.set_xticks(compressed_weeks)
ax.set_xticklabels([f"Wk {w}" for w in compressed_weeks])

# Legend and labels
handles = [plt.Rectangle((0,0),1,1, color=color_map[cat]) for cat in color_map]
ax.legend(handles, list(color_map.keys()), title="Task Type", loc='lower right')

plt.xlabel("Timeline")
plt.ylabel("Tasks")
plt.title("PayPal Refund Program Timeline (by week)") 
plt.grid(axis='x', linestyle='--', alpha=0.7)
plt.tight_layout()
plt.show()
