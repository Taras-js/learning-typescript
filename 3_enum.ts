//=======enum=========
// Вспомогательная сущность которая позволяет структурировать код если присутствуют какие-либо адаптивные сущности
enum Membership {
    Simple,
    Standard,
    Premium
}
const membership = Membership.Standard
const memberShipReverse = Membership[2]
console.log(membership)
console.log(memberShipReverse)
enum SocialMedia {
    VK = 'VK',
    FACEBOOK = 'FACEBOOK',
    TELEGRAM = 'TELEGRAM',
}
const social = SocialMedia.VK
console.log(social)