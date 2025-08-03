<script setup lang="ts">
</script>

<template>
    <div className="navbar">
        <div className="navbar-start flex-1">
            <!-- <a className="btn btn-ghost normal-case text-xl">></a> -->
             <div className="px-4">
                <v-icon name="gi-basketball-ball" scale="2" />  
             </div>
            <ul className="menu menu-horizontal p-0">
                <li><router-link to="/#home">Home</router-link></li>
                <li><router-link to="/#about">About</router-link></li>
                <li><router-link to="/#dashboards">Dashboards</router-link></li>
                <li><router-link to="/#findings">Findings</router-link></li>
                
            </ul>
        </div>
    </div>
</template>