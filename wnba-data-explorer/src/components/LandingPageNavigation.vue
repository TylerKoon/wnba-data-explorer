<script setup>
import { GiBasketballBall } from "oh-vue-icons/icons"
</script>

<template>
    <div className="navbar">
        <div className="navbar-start flex-1">
            <!-- <a className="btn btn-ghost normal-case text-xl">></a> -->
             <div className="px-4">
                <v-icon name="gi-basketball-ball" scale="2" />  
             </div>
            <ul className="menu menu-horizontal p-0">
                <li><a href="#home">Home</a></li>
                <li><a href="#dashboards">Dashboards</a></li>
                <li><a href="#findings">Findings</a></li>
            </ul>
        </div>
    </div>
</template>