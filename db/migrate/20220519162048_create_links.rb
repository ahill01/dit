class CreateLinks < ActiveRecord::Migration[7.0]
  def change
    create_table :links do |t|
      t.references :user, null: false, foreign_key: true
      t.string :kind
      t.string :url

      t.timestamps
    end
  end
end
