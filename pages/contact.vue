<script setup lang="ts">
import { object, string, type InferType } from 'yup';
import { useForm } from 'vee-validate';
import { reactive } from 'vue'; 

// Define your Yup schema
const schema = object({
  name: string().required('Name is required').required('Name is required'),
  email: string().email('Invalid email address').required('Email is required'),
  message: string().required('Message is required').min(10, 'Message is too short')
});

type Schema = InferType<typeof schema>;

// Reactive form state
const state = reactive({
  name: '',
  email: '',
  message: '',
});

const { handleSubmit, errors, resetForm } = useForm({
  validationSchema: schema
});

const onSubmit = handleSubmit((values) => {
  // Handle form submission here
  console.log('Form values:', values);

  resetForm()
  state.name = '';
  state.email = '';
  state.message = '';
});
</script>

<template>
  <div class="contact-me max-w-4xl mx-auto p-6">
    <div class="bg-white shadow-md rounded-lg overflow-hidden">
      <div class="bg-green-500 px-4 py-3 border-b">
        <h2 class="text-2xl font-semibold text-white">Contact Me</h2>
      </div>
      <div class="px-6 py-4">
        <UContainer class="w-full">
          <UForm :schema="schema" :state="state" class="space-y-4" @submit.prevent="onSubmit">
            <UFormGroup label="Name" name="name">
              <UInput v-model="state.name" />
            </UFormGroup>

            <UFormGroup label="Email" name="email">
              <UInput v-model="state.email" type="email" />
            </UFormGroup>

            <UFormGroup label="Message" name="message">
              <UTextarea v-model="state.message" placeholder="Please enter your message"/>
            </UFormGroup>

            <div class="text-center">
              <UButton type="submit" label="Submit" size="xl" block class="w-1/3 mx-auto bg-green-500 text-white" />
            </div>
          </UForm>
        </UContainer>
      </div>
    </div>
  </div>
</template>