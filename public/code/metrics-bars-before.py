import matplotlib.pyplot as plt

# Set up the dashboard with 2x2 subplots
fig, axs = plt.subplots(2, 2, figsize=(4, 6))
fig.patch.set_facecolor('black')
fig.suptitle("Key Metrics Before Program Launch", fontsize=10, ha='left', x=0.05, color='white')

# Common settings for all charts
def format_ax(ax, title, ylabel):
    ax.set_facecolor('black')
    ax.set_title(title, color='white', fontsize=10)
    ax.set_ylabel(ylabel, color='white')
    ax.tick_params(colors='white')
    for spine in ax.spines.values():
        spine.set_color('white')

# Chart 1: CSAT Score
axs[0, 0].bar(["CSAT Score"], [45], color="lightcoral")
axs[0, 0].axhline(y=80, color="forestgreen", linestyle="--", label="Team Goal (80%)")
axs[0, 0].set_ylim(0, 100)
format_ax(axs[0, 0], "CSAT Score (%)", "Percent")
axs[0, 0].legend(facecolor='black', edgecolor='white', labelcolor='white')

# Chart 2: # of Interactions
axs[0, 1].bar(["Avg. Interactions"], [16], color="orangered")
axs[0, 1].set_ylim(0, 20)
format_ax(axs[0, 1], "# of Interactions per Ticket", "Interactions")

# Chart 3: Time to Resolve
axs[1, 0].bar(["Resolution Time"], [12], color="firebrick")
axs[1, 0].axhline(y=3, color="forestgreen", linestyle="--", label="Expected (3 days)")
axs[1, 0].set_ylim(0, 20)
format_ax(axs[1, 0], "Resolution Time (Days)", "Days")
axs[1, 0].legend(facecolor='black', edgecolor='white', labelcolor='white')

# Chart 4: First Response Time
axs[1, 1].bar(["1st Response Time"], [8], color="red")
axs[1, 1].axhline(y=4, color="forestgreen", linestyle="--", label="SLA (4h)")
axs[1, 1].set_ylim(0, 24)
format_ax(axs[1, 1], "First Response Time (Hours)", "Hours")
axs[1, 1].legend(facecolor='black', edgecolor='white', labelcolor='white')

plt.tight_layout(rect=[0, 0, 1, 0.95])
plt.show()
