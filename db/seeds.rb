# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

rails db:reset
# rails db:migrate 
# rails db:seed
demo_user = User.create!(username: 'Tyler Durden', email: 'fight@club.net', password: 'password123')
Photo.create!(title: 'first pic', photographer_id: demo_user.id )
Photo.create!(title: 'second pic', photographer_id: demo_user.id )
Photo.create!(title: 'third pic', photographer_id: demo_user.id )
Photo.create!(title: 'fourth pic', photographer_id: demo_user.id )