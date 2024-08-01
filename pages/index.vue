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
      @on-open="alertMessage"
      @on-close="alertMessage"
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
  </div>
</template>

<script setup>
const route = useRoute()
const id = route.query.id

const handleOpenModal = (open) => {
  open()
}

const handleCloseModal = (close) => {
  close()
}

const alertMessage = (message) => {
  alert(message)
}
</script>
