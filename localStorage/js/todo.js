$(function(){


	var Todo = Backbone.Model.extend({
		defaults:function(){
			return {
				title:'empty...',
				order:todos.nextOrder,
				done:false
			}
		},

		initialize:function(){
			if(!this.get('title'))
				this.set('title', this.defaults.title)
		},

		toggle:function(){
			this.save()
		},

		clear:function(){
			this.destory()
		}
	})

	var TodoList = Backbone.Collection.extend({
		model:Todo,

		localStorage:new Store('todo-backbone'),

		initialize:function(){

		},

		nextOrder:function(){

		},

		comparator:function(){

		}
	})

	var todos = new TodoList

	var TodoView = Backbone.View.extend({
		tagName:'li',

		template: _.template($('#item-template').html()),

		initialize:function(){

			this.model.bind('change', this.render, this)
		},

		events:{

		},

		render:function(){
			this.$el.html(this.template(this.model.toJSON()))
			return this
		},

		close:function(){

		}
	})

	var AppView = Backbone.View.extend({
		el:$('#todo-app'),

		statsTemplate:_.template($('#stats-template').html()),

		initialize:function(){
			this.input = this.$('#new-todo')
			todos.bind('add', this.addOne, this)
		},

		events:{
			"keypress #new-todo":"createOnEnter"
		},

		addOne:function(todo){
			var view = new TodoView({model:todo})
			this.$('#todo-list').append(view.render().el)
		},

		render:function(){

		},

		createOnEnter:function(e){
			if(e.keyCode != 13) return
			todos.create({title:this.input.val()})
		}


	})

	var app = new AppView
})