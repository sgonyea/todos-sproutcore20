require 'spec_helper'

describe "todos/show.html.erb" do
  before(:each) do
    @home = assign(:home, stub_model(Home))
  end

  it "renders attributes in <p>" do
    render
  end
end
