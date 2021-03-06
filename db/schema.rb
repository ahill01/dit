# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `bin/rails
# db:schema:load`. When creating a new database, `bin/rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema[7.0].define(version: 2022_05_19_225346) do
  create_table "collab_requests", force: :cascade do |t|
    t.integer "requester_id", null: false
    t.integer "reciever_id", null: false
    t.boolean "accepted", default: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["reciever_id"], name: "index_collab_requests_on_reciever_id"
    t.index ["requester_id"], name: "index_collab_requests_on_requester_id"
  end

  create_table "collabs", force: :cascade do |t|
    t.integer "collaborator_a_id", null: false
    t.integer "collaborator_b_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["collaborator_a_id"], name: "index_collabs_on_collaborator_a_id"
    t.index ["collaborator_b_id"], name: "index_collabs_on_collaborator_b_id"
  end

  create_table "conversations", force: :cascade do |t|
    t.integer "sender_id", null: false
    t.integer "recipient_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["recipient_id"], name: "index_conversations_on_recipient_id"
    t.index ["sender_id"], name: "index_conversations_on_sender_id"
  end

  create_table "instruments", force: :cascade do |t|
    t.string "kind"
    t.integer "user_id", null: false
    t.string "proficiency", default: "beginner"
    t.boolean "primary", default: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["user_id"], name: "index_instruments_on_user_id"
  end

  create_table "links", force: :cascade do |t|
    t.integer "user_id", null: false
    t.string "kind"
    t.string "url"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["user_id"], name: "index_links_on_user_id"
  end

  create_table "messages", force: :cascade do |t|
    t.string "body"
    t.integer "conversation_id", null: false
    t.integer "user_id", null: false
    t.boolean "read", default: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["conversation_id"], name: "index_messages_on_conversation_id"
    t.index ["user_id"], name: "index_messages_on_user_id"
  end

  create_table "users", force: :cascade do |t|
    t.string "name"
    t.string "username"
    t.string "password_digest"
    t.string "pronouns"
    t.string "gender"
    t.string "collab_type"
    t.string "genre"
    t.string "email"
    t.boolean "remote", default: false
    t.string "homebase"
    t.string "bio"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  add_foreign_key "instruments", "users"
  add_foreign_key "links", "users"
  add_foreign_key "messages", "conversations"
  add_foreign_key "messages", "users"
end
