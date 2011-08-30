class Todo < ActiveRecord::Base
  default_scope where(:is_cleared => false)

  def isDone
    is_done
  end

  def isDone=(isDone)
    self.is_done = isDone
  end

  def as_json(*args)
    { :id => id, :title => title, :isDone => is_done? }
  end
end
