<template>
    <div className="card bg-base-200 shadow-lg p-12">
        <div className="bg-base-200">
            <h2 className="text-2xl font-bold text-gray-300 mb-6">Welcome</h2>
            <p className="text-base-content mb-8">
                Thank you for visiting our website! We wanted to create a platform to help new and experienced users alike understand how the Women’s National Basketball Association (WNBA) has changed over time. We want this tool to be interactive and explanatory, helping users answer questions ranging from how shot types have changed over time, to whether there is a relationship between salary and overall “skill”, to even questions about which teams perform best in the “clutch”.
            </p>

            <h2 className="text-2xl font-bold text-gray-300 mb-6">Meet the Team</h2>
            <p className="text-base-content mb-2">
                Each of us worked collaboratively to design this platform, although we each had a primary area of focus in putting this together.
            </p>
            <ul className="mb-8">
                <li>Tyler Koon -  Shot Trends over Time (Distance from Hoop and Shot Types)</li>
                <li>Neeha Kotte – Player Value / ROI (Relating Salary to Player Skill Contribution)</li>
                <li>Daniel Motoc – Key Plays and Players (“Clutch” performance and fouls analysis)</li>
                <li>Christopher Onwuka – Schedule Fatigue (“Back-to-Back” Games and Travel Distance)</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-300 mb-6">Data Sources</h2>
            <p className="text-base-content mb-2">
                Our primary data source for this platform was wehoop. We used the wehoop-wnba-data repo on Github (<a href="https://github.com/sportsdataverse/wehoop-wnba-data/tree/main" className="link">link</a>) to bring in play-by-play and player box score data for each season from 2003 to 2025.
            </p>
            <p className="text-base-content mb-8">
                A secondary data source was HerHoopStats, specifically the “Her Hoop Stats WNBA Salary Cap Database” (<a href="https://herhoopstats.com/salary-cap-sheet/wnba/players/salary_2025/stats_2024/" className="link">link</a>), which included compensation data for each player for each season from 2021 to 2025. This was essential for the player value/ROI visualizations.
            </p>

            <h2 className="text-2xl font-bold text-gray-300 mb-6">Tasks/Questions to Consider</h2>
            <p className="text-base-content mb-2">
                As you’re using this platform, we’ve included some questions to help guide 
the user as they explore the platform. Have these questions in mind as you 
navigate each page and see if you can find an answer!
            </p>
            <ul style="list-style-type: disc; padding-left: 1.5rem;">
                <li>Shot Trends over Time</li>
                <ul style="list-style-type: disc; padding-left: 1.5rem;">
                    <li>Have teams been shooting farther away from the basket in more recent seasons compared to in the past?</li>
                    <li>Are there any shot types that have gotten more popular in recent years?</li>
                    <li>Are there any teams which are better/more prolific with certain shot types than others?</li>
                </ul>

                <li>Player Value / ROI</li>
                <ul style="list-style-type: disc; padding-left: 1.5rem;">
                    <li>Are there any players who are much more valuable than others based on their salary relative to their skill contribution?</li>
                    <li>Are there any teams which have a much higher skill contribution relative to their overall payroll?</li>
                </ul>

                <li>Key Plays and Players</li>
                <ul style="list-style-type: disc; padding-left: 1.5rem;">
                    <li>Which teams have performed best “in the clutch”?</li>
                    <li>Have fouls been increasing league-wide each season?</li>
                </ul>

                <li>Schedule Fatigue</li>
                <ul style="list-style-type: disc; padding-left: 1.5rem;">
                    <li>Do teams play more “back-to-back” games than they used to?</li>
                    <li>Do teams have to travel more than they used to?</li>
                    <li>Are there any regions which have to travel more than other regions?</li>
                </ul>
            </ul>
        </div>
    </div>
</template>