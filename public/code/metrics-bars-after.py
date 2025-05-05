import matplotlib.pyplot as plt
import numpy as np

# Data for before and after
categories = {
    "CSAT Score (%)": {"before": 45, "after": 87, "ylim": 100, "ylabel": "Percent", "goal": 80, "goal_label": "Team Goal (80%)"},
    "# of Interactions per Ticket": {"before": 16, "after": 3, "ylim": 20, "ylabel": "Interactions"},
    "Resolution Time (Days)": {"before": 12, "after": 1, "ylim": 20, "ylabel": "Days", "goal": 3, "goal_label": "Expected (3 days)"},
    "1st Response Time (Hours)": {"before": 8, "after": 2, "ylim": 24, "ylabel": "Hours", "goal": 4, "goal_label": "SLA (4h)"},
}

# Set up the dashboard with 3x2 subplots
fig, axs = plt.subplots(3, 2, figsize=(8, 10))
fig.suptitle("Key Metrics Before vs After Program Launch", fontsize=8, ha='left', x=0.05)

# Bar width and positioning
bar_width = 0.25
index = np.arange(1)

# Iterate through categories and plot
for ax, (title, data) in zip(axs.flat[:4], categories.items()):
    ax.bar(index, data["before"], bar_width, label="Before", color="lightcoral")
    ax.bar(index + bar_width, data["after"], bar_width, label="After", color="mediumseagreen")
    ax.set_title(title, fontsize=10)
    ax.set_xticks([])
    ax.set_ylim(0, data["ylim"])
    ax.set_ylabel(data["ylabel"])
    if "goal" in data:
        ax.axhline(y=data["goal"], color="blue", linestyle="--", label=data["goal_label"])
    
    # Custom legend position for CSAT chart
    if title == "CSAT Score (%)":
        ax.legend(loc="upper left", bbox_to_anchor=(0, 1))
    else:
        ax.legend()

# Chart 5: Error Rate (KPI tile)
axs[2, 0].axis("off")
axs[2, 0].text(0.5, 0.6, "↓ from 5% to <1%", fontsize=20, ha='center', color='darkorange')
axs[2, 0].text(0.5, 0.3, "Error Rate (double refund, wrong account)", fontsize=10, ha='center') 

# Chart 6: Unrecovered Refunds (KPI tile)
axs[2, 1].axis("off")
axs[2, 1].text(0.5, 0.6, "$250,000+", fontsize=20, ha='center', color='green')
axs[2, 1].text(0.5, 0.3, "Recovered Refunds in 16+ months", fontsize=11, ha='center')

plt.tight_layout(rect=[0, 0, 1, 0.95])
plt.show()
