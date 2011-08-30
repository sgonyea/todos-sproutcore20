class CreateTodos < ActiveRecord::Migration
  def change
    create_table :todos do |t|
      t.string  :title
      t.boolean :is_done,     :default => false
      t.boolean :is_cleared,  :default => false

      t.timestamps
    end

    add_index :todos, :is_cleared
  end
end
