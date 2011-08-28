require 'sprockets/engines'
require 'tilt/template'

class HjsTemplate < Tilt::Template
  self.default_mime_type = 'application/javascript'

  def initialize_engine() end
  def prepare() end

  # Generates Javascript code from a HandlebarsJS template.
  # The SC template name is derived from the lowercase logical asset path
  # by replacing non-alphanum characheters by underscores.
  def evaluate(scope, locals, &block)
    template = data.dup
    template.gsub!(/"/, '\\"')
    template.gsub!(/\r?\n/, '\\n')
    template.gsub!(/\t/, '\\t')
    "SC.TEMPLATES[\"#{scope.logical_path.downcase.gsub(/[^a-z0-9]/, '_')}\"] = SC.Handlebars.compile(\"#{template}\");\n"
  end
end

Tilt.register HjsTemplate, 'hjs'

Sprockets.register_engine '.hjs', HjsTemplate
