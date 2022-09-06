puts "🌱 Seeding spices..."

# Seed your database here
Journal.create(title: "First Entry", body: "First entry for first user, yeyyy!", user_id: User.first.id)
Journal.create(title: "Second Entry", body: "Second entry for first user, yeyyy!", user_id: User.first.id)
Journal.create(title: "Third Entry", body: "Third entry for first user, yeyyy!", user_id: User.first.id)
Journal.create(title: "First Entry", body: "First entry for first user, yeyyy!", user_id: User.second.id)
Journal.create(title: "Second Entry", body: "Second entry for first user, yeyyy!", user_id: User.second.id)
Journal.create(title: "Third Entry", body: "Third entry for first user, yeyyy!", user_id: User.second.id)

puts "✅ Done seeding!"
