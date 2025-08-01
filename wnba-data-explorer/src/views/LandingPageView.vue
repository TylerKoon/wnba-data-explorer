<script setup lang="ts">
import Hero from '../components/Hero.vue';
import LandingPageNavigation from '../components/LandingPageNavigation.vue';
import Finding from '../components/Finding.vue';
import DashboardTile from '../components/DashboardTile.vue';
import { BeakerIcon } from '@heroicons/vue/24/solid'

const dashboards = [
    { title: "Player Trends", description: "Explore player performance trends over the season." },
    { title: "Team Trends", description: "Analyze team performance metrics and statistics." },
    { title: "League Overview", description: "Get insights into league-wide trends and statistics." },
    { title: "Historical Data", description: "Dive into historical WNBA data and compare seasons." }
];

const findings = [
    { title: "Finding 1", description: "Findings - Salary vs. Weighted Skill Score: WNBA players have been working towards more equitable compensation ('Pay Us What You Owe Us'), especially in comparison to their league counterparts, the NBA. In fact, while the average salary in the NBA is about $11+ million, the WNBA average salary is only about $100,000. And, while the NBA players' cut of the NBA revenue is around ~49-51%, the WNBA player's cut is only around ~9-10% (Anderson, 2025). These charts were designed to understand fair and equitable compensation in the WNBA and to identify how skill level, games won, time in the league, and contract types can influence pay. We can see from the Weighted Skill Score vs. Salary by Player scatterplot that contract types can significantly influence play. For example, even highly skilled players such as Caitlin Clark and Angel Reese are paid within the $70,000-80,000 range simply because they are Rookies. From the Player Weighted Skill Score and Salaries Over Time chart, we can see that many Rookies begin their careers in this salary range, but see a steady increase over time (reflected by their tenure on teams and in the league). For example, this is the case with players like A'ja Wilson, who began her career with a ~$70,000 salary, but now has moved up to $200,000+. This is proportional to her skill level, as she has consistently been one of the top players in blocks, rebounds and points, as displayed in the Distribution of Players Across Weighted Skill Score, Salary, Assists, Blocks, Steals, Points & Rebounds chart. Other players with relatively lower weighted skill scores and salaries are often on Hardship contracts, which are usually short term and for replacement players when others are injured. Similarly, the amount teams spend on player salaries is not always proportional to the number of games they win, even though we may expect it to be. For example, in the 2025 season, Seattle Storm spent the most money on player salaries, but had a relatively medium to low number of games won. In fact, teams like Las Vegas Aces, and especially Connecticut Sun, spent less but won more. These charts provide valuable information on how player and team salaries have changed over time, as a reflection of their skill-level, contract type, etc. As a whole, however, they do indicate that salaries are not always based on the most fair or equitable methods, and that there is still plenty of room for the WNBA to improve its compensation practices. Sources: Anderson, W. L. (2025, July 24). Do WNBA players really want to be paid what they are owed?. Mises Institute. https://mises.org/mises-wire/do-wnba-players-really-want-be-paid-what-they-are-owed" },
    { title: "Finding 2", description: "Description of finding 2" },
    { title: "Finding 3", description: "Description of finding 3" },
    { title: "Finding 4", description: "Description of finding 4" }
];

</script>

<template>
    <div className="flex flex-col items-center">
        <div className="flex flex-col items-center min-h-screen w-full">
            <LandingPageNavigation />
            <Hero />
        </div>
        <div className="flex flex-col items-center px-12 min-h-196 max-w-5xl w-full bg-gray-200">
            <h2 className="text-3xl font-bold my-12">Dashboards</h2>
            <div className="grid grid-cols-3 grid-flow-row gap-6 w-full bg-white justify-items-center align-items-center">
                <DashboardTile v-for="dashboard in dashboards" :key="dashboard.title" :title="dashboard.title" :description="dashboard.description">
                    <template v-slot:figure>
                        <BeakerIcon className="w-16 h-16 text-gray-500" />
                    </template>
                </DashboardTile>
            </div>
        </div>
        <div className="flex flex-col items-center py-6 px-12 max-w-5xl w-full bg-gray-200">
            <h2 className="text-3xl font-bold my-12">Findings</h2>
            <div className="grid gap-12 w-full bg-white">
                <Finding v-for="finding in findings" :key="finding.title" :title="finding.title" :description="finding.description" />
            </div>
        </div>
        
    </div>
</template>