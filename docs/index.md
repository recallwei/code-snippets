---
layout: home

title: Code Snippets
titleTemplate: No more config and template code, free your hands, making your life better!

hero:
  name: Code Snippets
  text: No more config and template code
  tagline: Free your hands, making your life better!
  image:
    src: /logo.png
    alt: Code Snippets
  actions:
    - theme: brand
      text: Get Started
      link: /guide/get-started
    - theme: alt
      text: View on GitHub
      link: https://github.com/recallwei/code-snippets#readme

features:
  - title: Out-of-box
    icon: 📦
    details: No more config and template code.
  - title: Easy to use
    icon: ✅
    details: All the template code is best practice.
  - title: Free your hands
    icon: ✌️
    details: Free your hands, making your life better!
---

<script setup>
import { VPTeamMembers } from 'vitepress/theme'
import { contributors } from './constants'
</script>

<br/>

<div style="text-align: center;margin: 100px 0 40px 0;font-size: 20px;font-weight: 600;">Contributors</div>

<VPTeamMembers size="small" :members="contributors" />
