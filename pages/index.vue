<template>
  <div>
    <h1>My Greeting Page</h1>
    <FavoriteContainer>
      <template #favoriteContainer="{ favorite, onToggleFavorite }">
        <AleCountContainer>
          <template
            #aleCountContainer="{
              aleCount,
              doubledAleCount,
              onIncrementAleCount,
              onClearAleCount,
            }"
          >
            <UserContainer :id="id">
              <template #userContainer="{ profile }">
                <GreetingContainer :id="id">
                  <template #greetingContainer="{ greeting }">
                    <UserCard
                      v-if="profile"
                      :id="profile.id"
                      :age="profile.age"
                      :name="profile.name"
                      :sex="profile.sex"
                      :greeting="greeting.text"
                      :greeting-id="greeting.id"
                      :favorite="favorite"
                      @click="onToggleFavorite"
                    />
                    <p v-else>
                      存在しないユーザーです。
                    </p>
                  </template>
                </GreetingContainer>
              </template>
            </UserContainer>
            <div class="flex justify-center align-middle gap-4 py-4">
              <Button @click="onIncrementAleCount">
                応援する
              </Button>
              <Button @click="onClearAleCount">
                クリア
              </Button>
              <Button @click="onToggleFavorite">
                お気に入り
              </Button>
            </div>
            <AleCount
              :ale-count="aleCount"
              :doubled-ale-count="doubledAleCount"
            />
          </template>
        </AleCountContainer>
      </template>
    </FavoriteContainer>
    <Modal
      :open="isModalOpen"
      :overlay-closable="false"
      @on-open="logMessage"
      @on-close="logMessage"
      @update="handleChangeModalState"
    >
      <template #trigger="{ open }">
        <Button @click="handleOpenModal(open)">
          modal open
        </Button>
      </template>
      <template #contents="{ close }">
        <div class="modal-contents">
          <div class="p-m">
            モーダル
          </div>
          <div class="flex flex-center flex-gap-m">
            <Button @click="handleCloseModal(close)">
              close
            </Button>
            <Button @click="alertMessage('submit')">
              submit
            </Button>
          </div>
        </div>
      </template>
    </Modal>
    <p>{{ isModalOpen }}</p>
    <button @click="isModalOpen=!isModalOpen">
      更新
    </button>
  </div>
</template>

<script setup lang="ts">
import Modal from '@/components/ui/Modal/index.vue'

const route = useRoute()
const id = route.query.id
const isModalOpen = ref(false)

const handleOpenModal = (open: () => void) => {
  open()
}

const handleCloseModal = (close: () => void) => {
  close()
}

const handleChangeModalState = () => {
  isModalOpen.value = !isModalOpen.value
}

const alertMessage = (message: string) => {
  alert(message)
}

const logMessage = (arg1: string, arg2: string) => {
  // eslint-disable-next-line no-console
  console.log(arg1)
  // eslint-disable-next-line no-console
  console.log(arg2)
}
</script>
