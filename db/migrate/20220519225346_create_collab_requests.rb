class CreateCollabRequests < ActiveRecord::Migration[7.0]
  def change
    create_table :collab_requests do |t|
      t.references :requester, null: false, index: true
      t.references :reciever, null: false, index: true
      t.boolean :accepted, :default => false
      t.timestamps
    end
  end
end
