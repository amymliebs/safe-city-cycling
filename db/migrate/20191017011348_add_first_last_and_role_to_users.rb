class AddFirstLastAndRoleToUsers < ActiveRecord::Migration[5.2]
  def up
    add_column :users, :role, :string, null: false, default: "member"
    add_column :users, :first_name, :string, null: false
    add_column :users, :last_initial, :string, null: false
  end
  def down
    remove_column :users, :role, :string
    remove_column :users, :first_name, :string
    remove_column :users, :last_initial, :string
  end
end
