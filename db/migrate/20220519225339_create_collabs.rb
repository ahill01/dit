class CreateCollabs < ActiveRecord::Migration[7.0]
  def change
    create_table :collabs do |t|
      t.references :collab_requests, null: false, foreign_key: true
      t.references :user, null: false, foreign_key: true
      t.boolean :read, :default => false
      t.timestamps
      t.timestamps
    end
  end
end
