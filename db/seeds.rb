# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


require 'open-uri'

User.destroy_all
Photo.destroy_all

demo_user = User.create!(username: 'Tyler Durden', email: 'fight@club.net', password: 'password123')
# demo_user = User.find_by(email: 'fight@club.net')

file_paths_arr = Dir["/home/klue/Documents/500kicks/pics/*"]
file_names_arr = Dir.entries("/home/klue/Documents/500kicks/pics/").select { |file| !File.directory? file }

file_names_arr.length.times do
    Photo.create!(title: 'Title goes here', photographer_id: demo_user.id )
end

all_photos = Photo.all.to_a

until all_photos.empty? 
    photo_post = all_photos.shift
    file_path = file_paths_arr.shift
    file_name = file_names_arr.shift

    photo_post.photo.attach(io: open(file_path), filename: file_name)
    
end

# demo_user.photos.first.photo.attach(io: open('/home/klue/Documents/500kicks/pics/photo-1455095692583-a6db7b07d3f3.jpeg'), filename: "photo-1455095692583-a6db7b07d3f3.jpeg" )


# Photo.create!(title: 'first pic', photographer_id: demo_user.id )
# Photo.create!(title: 'second pic', photographer_id: demo_user.id )
# Photo.create!(title: 'third pic', photographer_id: demo_user.id )
# Photo.create!(title: 'fourth pic', photographer_id: demo_user.id )

# photo_names_array = Dir.entries("/home/klue/Documents/500kicks/pics/").select {|f| !File.directory? f} 
# photo_path_array = Dir["/home/klue/Documents/500kicks/pics/*"]
# Photo.all.each do |photo_post|
#     photo_post.photo.attach(io: )
#     #figure out how to do this dynamically... seed the whole database and attach the aws photos to a photo in the database
# end

# file_path_arr = [
#     '/home/klue/Documents/500kicks/pics/photo-1455095692583-a6db7b07d3f3.jpeg',
#     '/home/klue/Documents/500kicks/pics/photo-1509927083803-4bd519298ac4.jpeg',
#     '/home/klue/Documents/500kicks/pics/photo-1500577329392-f0af6d7dd827.jpeg',
#     '/home/klue/Documents/500kicks/pics/photo-1454177643390-7f100d1bbeec.jpeg'
# ]

# file_name_arr = [
#     "photo-1455095692583-a6db7b07d3f3.jpeg",
#     "photo-1509927083803-4bd519298ac4.jpeg",
#     "photo-1500577329392-f0af6d7dd827.jpeg",
#     "photo-1454177643390-7f100d1bbeec.jpeg"
# ]


# all_photos.each_with_index do |photo_post, i| # [photo1, photo2, photo3, photo4]
#     file_path_arr.each_with_index do |file_path, i2| # [photo1_path, photo2_path, photo3_path, photo4_path]
#         file_name_arr.each_with_index do |file_name, i3| # [photo1_name, photo2_name, photo3_name, photo4_name]
#             debugger 
#             if i3 > i2 && i2 > i
#                 photo_post.photo.attach(io: File.open(file_path), filename: file_name)
#             end
#         end
#     end
# end

# demo_user.photos.last.photo.attach(io: open('/home/klue/Documents/500kicks/pics/photo-1454177643390-7f100d1bbeec.jpeg'), filename: "photo-1454177643390-7f100d1bbeec.jpeg" )
# demo_user.photos[1].photo.attach(io: open('/home/klue/Documents/500kicks/pics/photo-1500577329392-f0af6d7dd827.jpeg'), filename: "photo-1500577329392-f0af6d7dd827.jpeg" )
# demo_user.photos[2].photo.attach(io: open('/home/klue/Documents/500kicks/pics/photo-1509927083803-4bd519298ac4.jpeg'), filename: "photo-1509927083803-4bd519298ac4.jpeg" )

# Photo.find_by(photographer_id: demo_user.id).photo.attach(io: open('/home/klue/Documents/500kicks/pics/photo-1455095692583-a6db7b07d3f3.jpeg'), filename: "photo-1455095692583-a6db7b07d3f3.jpeg" )
# Photo.find_by(photographer_id: demo_user.id).photo.attach(io: open('/home/klue/Documents/500kicks/pics/photo-1509927083803-4bd519298ac4.jpeg'), filename: "photo-1509927083803-4bd519298ac4.jpeg" )
# Photo.find_by(photographer_id: demo_user.id).photo.attach(io: open('/home/klue/Documents/500kicks/pics/photo-1500577329392-f0af6d7dd827.jpeg'), filename: "photo-1500577329392-f0af6d7dd827.jpeg" )
# Photo.find_by(photographer_id: demo_user.id).photo.attach(io: open('/home/klue/Documents/500kicks/pics/photo-1454177643390-7f100d1bbeec.jpeg'), filename: "photo-1454177643390-7f100d1bbeec.jpeg" )



# Photo.find_by(photographer_id: demo_user.id).photo.attach(io: open('/home/klue/Documents/500kicks/pics/photo-1455095692583-a6db7b07d3f3.jpeg'), filename: "photo-1455095692583-a6db7b07d3f3.jpeg" )
# Photo.find_by(photographer_id: demo_user.id).photo.attach(io: open('/home/klue/Documents/500kicks/pics/photo-1509927083803-4bd519298ac4.jpeg'), filename: "photo-1509927083803-4bd519298ac4.jpeg" )
# Photo.find_by(photographer_id: demo_user.id).photo.attach(io: open('/home/klue/Documents/500kicks/pics/photo-1500577329392-f0af6d7dd827.jpeg'), filename: "photo-1500577329392-f0af6d7dd827.jpeg" )
# Photo.find_by(photographer_id: demo_user.id).photo.attach(io: open('/home/klue/Documents/500kicks/pics/photo-1454177643390-7f100d1bbeec.jpeg'), filename: "photo-1454177643390-7f100d1bbeec.jpeg" )

# demo_user = User.create!(username: 'Tyler Durden', email: 'fight@club.net', password: 'password123')
# Photo.create!(title: 'first pic', photographer_id: demo_user.id )
# Photo.create!(title: 'second pic', photographer_id: demo_user.id )
# Photo.create!(title: 'third pic', photographer_id: demo_user.id )
# Photo.create!(title: 'fourth pic', photographer_id: demo_user.id )