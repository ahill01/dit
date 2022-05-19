class CreateUsers < ActiveRecord::Migration[7.0]
  def change
    create_table :users do |t|
      t.string :name
      t.string :username
      t.string :password_digest
      t.string :pronouns
      t.string :gender
      t.string :collab_type
      t.string :genre 
      t.string :email 
      t.boolean :remote, :default => false
      t.string :homebase
      t.string :bio
      t.timestamps
    end
  end
end
