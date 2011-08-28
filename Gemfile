source :rubygems

gem 'rails', '3.1.0.rc6'

gem 'pg'

# Gems used only for assets and not required
# in production environments by default.
group :assets do
  gem 'compass',  :git => 'git://github.com/chriseppstein/compass.git', :branch => 'rails31' # '~>0.11.5'
  gem 'sass-rails',   '~> 3.1.0.rc'
  gem 'fancy-buttons'

  gem 'coffee-rails', '~> 3.1.0.rc'
  gem 'jquery-rails'

  gem 'uglifier'
end

gem 'unicorn'

group :deploy do
  gem 'capistrano'
end

group :test, :development do
  gem 'spork',        '~>0.9.0.rc9'
  gem 'rspec',        '~>2.6.0'
  gem 'rspec-rails',  '~>2.6.1'
  gem 'jsonpath'

  gem 'factory_girl'

  gem 'cucumber', '~> 1.0.0'
  gem 'cucumber-rails', '~> 1.0.2'

  gem 'ruby-debug19', :require => 'ruby-debug', :platforms => [:mri_19]
  gem 'ruby-debug',   :require => 'ruby-debug', :platforms => [:mri_18]
end
