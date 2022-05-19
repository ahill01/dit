class CreateCollabRequests < ActiveRecord::Migration[7.0]
  def change
    create_table :collab_requests do |t|

      t.timestamps
    end
  end
end
