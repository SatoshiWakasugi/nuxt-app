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
                      :age="profile.age"
                      :id="profile.id"
                      :name="profile.name"
                      :sex="profile.sex"
                      :greeting="greeting.text"
                      :greetingId="greeting.id"
                      :favorite="favorite"
                      @click="onToggleFavorite"
                    />
                    <p v-else>存在しないユーザーです。</p>
                  </template>
                </GreetingContainer>
              </template>
            </UserContainer>
            <div class="button_area">
              <Button @click="onIncrementAleCount" class="ale_button"
                >応援する</Button
              >
              <Button @click="onClearAleCount" class="ale_button"
                >クリア</Button
              >
              <Button @click="onToggleFavorite" class="ale_button"
                >お気に入り</Button
              >
            </div>
            <AleCount :aleCount="aleCount" :doubledAleCount="doubledAleCount" />
          </template>
        </AleCountContainer>
      </template>
    </FavoriteContainer>
    <Modal @on-open="alertMessage" @on-close="alertMessage">
      <template #trigger>
        <Button>modal open</Button>
      </template>
      <template #contents="{ close }">
        <div class="modal-contents">
          <div class="p-m">モーダル</div>
          <div class="flex flex-center flex-gap-m">
            <Button @click="onClose(close)">close</Button>
            <Button @click="alertMessage('submit')">submit</Button>
          </div>
        </div>
      </template>
    </Modal>
  </div>
</template>

<script setup>
const route = useRoute();
const id = route.query.id;

const onClose = (close) => {
  console.log("onClose");
  close();
};

const alertMessage = (message) => {
  alert(message);
};
</script>

<style scoped>
.button_area {
  display: flex;
  justify-content: center;
  align-items: center;
}

.ale_button {
  padding: 12px 0;
  margin: 0 4px;
}
</style>
