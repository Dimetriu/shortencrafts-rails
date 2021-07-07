namespace :launch do
  task :development do
    exec 'heroku local -f Procfile.dev'
  end
end

desc 'Launch development server'
task l: 'launch:development'
