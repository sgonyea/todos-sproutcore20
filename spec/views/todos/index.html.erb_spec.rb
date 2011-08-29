require 'spec_helper'

describe "todos/index.html.erb" do
  before(:each) do
    assign(:todos, [
      stub_model(Home),
      stub_model(Home)
    ])
  end

  it "renders a list of todos" do
    render
  end
end
