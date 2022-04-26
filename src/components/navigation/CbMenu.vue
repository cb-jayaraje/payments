<template>
     <nav class="mt-5 flex-1 px-2 bg-white space-y-1">
    <!-- Current: "bg-gray-100 text-gray-900", Default: "text-gray-600 hover:bg-gray-50 hover:text-gray-900" -->
    <router-link to='/'  class="menu-a">
      <!--
        Heroicon name: outline/home

        Current: "text-gray-500", Default: "text-gray-400 group-hover:text-gray-500"
      -->
      <svg xmlns="http://www.w3.org/2000/svg" class="menu-icon" viewBox="0 0 20 20" fill="currentColor">
        <path fill-rule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clip-rule="evenodd" />
      </svg>
      Home
    </router-link>

    <a href="#" class="menu-a">
      <!-- Heroicon name: outline/users -->
      <svg xmlns="http://www.w3.org/2000/svg" class="menu-icon" viewBox="0 0 20 20" fill="currentColor">
        <path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z" />
      </svg>
      Customers
    </a>

    <a href="#" class="menu-a">
                      <svg xmlns="http://www.w3.org/2000/svg" class="menu-icon" viewBox="0 0 20 20" fill="currentColor">
                        <path d="M7 3a1 1 0 000 2h6a1 1 0 100-2H7zM4 7a1 1 0 011-1h10a1 1 0 110 2H5a1 1 0 01-1-1zM2 11a2 2 0 012-2h12a2 2 0 012 2v4a2 2 0 01-2 2H4a2 2 0 01-2-2v-4z" />
                      </svg>
      Subscriptions
    </a>

    <a href="#" class="menu-a">            
        <svg xmlns="http://www.w3.org/2000/svg" class="menu-icon" viewBox="0 0 20 20" fill="currentColor">
            <path d="M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM11 13a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
          </svg>
      Products
    </a>

    <a href="#" class="menu-a">            
        <svg xmlns="http://www.w3.org/2000/svg" class="menu-icon" viewBox="0 0 20 20" fill="currentColor">
            <path fill-rule="evenodd" d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm2 6a1 1 0 011-1h6a1 1 0 110 2H7a1 1 0 01-1-1zm1 3a1 1 0 100 2h6a1 1 0 100-2H7z" clip-rule="evenodd" />
          </svg>
      Invoices
    </a>

    <a href="#" class="menu-a">            
        <svg xmlns="http://www.w3.org/2000/svg" class="menu-icon" viewBox="0 0 20 20" fill="currentColor">
            <path fill-rule="evenodd" d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm2 6a1 1 0 011-1h6a1 1 0 110 2H7a1 1 0 01-1-1zm1 3a1 1 0 100 2h6a1 1 0 100-2H7z" clip-rule="evenodd" />
          </svg>
      Quotes
    </a>

    <a @click.prevent="toggleSettings" class="menu-a cursor-pointer">   
                        <svg xmlns="http://www.w3.org/2000/svg" class="menu-icon" viewBox="0 0 20 20" fill="currentColor">
            <path fill-rule="evenodd" d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z" clip-rule="evenodd" />
          </svg>
        <span class=" inline-flex justify-between flex-1">
          Settings
          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
  <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd" />
</svg>
          </span> 
      </a>
      <div class=" h-32 pl-8 " :class="settingSubMenu ? 'block' : 'hidden'">
        <router-link to="/settings" class="menu-a cursor-pointer">Configure Chargebee</router-link>
        <a class="menu-a">Third-party Integrations</a>
        <a class="menu-a">Import & Export Data</a>
        <a class="menu-a">Team Members</a>
        <a class="menu-a">Chargebee Notifications</a>
        <a class="menu-a">Security</a>
      
      </div>
  </nav>
</template>

<script>

  import User from './../../mixin/User'

  export default {
     data(){
      return {
        settingSubMenu: false
      }
    },
    mixins: [User],
    
    methods: {
      toggleSettings(){
        this.settingSubMenu = !this.settingSubMenu
      }
    }
  }
</script>