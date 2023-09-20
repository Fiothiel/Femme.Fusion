<template>
  <div class="about">
    <h1>Vi i Femme Fusion</h1>
    <div class="about__members">
      <MemberInfo path="../../src/assets/images/kris-01.jpg" alt="Kristina" name="Kristina" />
      <MemberInfo path="../../src/assets/images/sandra-01.jpg" alt="Sandra" name="Sandra" />
      <MemberInfo path="../../src/assets/images/hanna-01.jpg" alt="Hanna" name="Hanna" :right="true" />
      <MemberInfo path="../../src/assets/images/ella-01.jpg" alt="Ella" name="Ella" :right="true" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted, computed } from 'vue';
import MemberInfo from '../../components/memberinfo/MemberInfo.vue';

// Todo: List<IMember> to loop out

</script>
