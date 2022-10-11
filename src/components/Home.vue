<template>
    <q-layout id="app" class="bar-header" view="hHh lpR fFf">
  
      <q-header reveal elevated class="bg-primary text-white" height-hint="98">
        <q-toolbar class="bar-header">
          <q-toolbar-title>
            <q-avatar>
              <img src="/block-favicon.png">
            </q-avatar>
            The most interesting Blockchains
          </q-toolbar-title>
        </q-toolbar>
  
        <q-tabs align="left">
          <q-route-tab to="/components/Home" label="Home" />
          <q-route-tab to="/components/What is" label="What is...?" />
          <q-route-tab to="/components/AboutMe" label="About me" />
        </q-tabs>
      </q-header>
  
      <q-page-container>
        <router-view />
      </q-page-container>
  
      <q-footer reveal elevated class="bg-grey-8 text-white">
        <q-toolbar>
          <q-toolbar-title>
            <q-avatar>
              <img src="/block-favicon.png">
            </q-avatar>
            <div>The most interesting Blockchains</div>
          </q-toolbar-title>
        </q-toolbar>
      </q-footer>
  
    </q-layout>
  </template>
  
  <style>
  .bar-header{
    background-color: blue;
  }
  
  </style>