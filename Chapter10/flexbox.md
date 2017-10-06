#1 Intro to flexbox
-- what is it?
-- not for pagelayout, but more for component-level layout or small-scale layout
-- advantages
    -- source order switching
    -- equal height columns
    -- vertical and horizontal centering easily
    -- alter width and height of flex-items to best fill available space
-- FLEX CONTAINER vs FLEX ITEM
-- main-size, cross-size, main-axis, cross-axis
-- the spec has changed
--Browser Support (IE10+)

#2 Switching from floats to flexbox
--Switch the COLUMNS from floats to flex
-- remove all float based, percentage based css
-- add in basic css
-- display: flex
--flex-direction: row, column - super powerful and easy by itself but it is the reason for now having to understand things like main-axis, cross-axis, main-size, and cross-size...  flex-direction of column changes the main-size and cross-size, main-axis and cross-axis
-- notice how floats are ignored for flex-items
-- add border - notice how easy equal height columns are acheived

<section class="secondary-section grouping">
    <div class="wrapper columns">
        <div class="column">
            <figure>
                <img src="images/octopus-icon.png" alt="Octopus">
            </figure>
            <h2>The Octopus</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab recusandae iusto voluptate corporis amet sunt harum, veritatis quo dicta dignissimos, ipsa deserunt consectetur modi.</p>
            <a href="#" class="button">Tenticals &raquo;</a>
        </div>
        <div class="column">
            <figure>
                <img src="images/crab-icon.png" alt="Crab">
            </figure>
            <h2>The Crab</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptas tempora at odit fugit mollitia dolorum eius voluptatem quos veniam inventore rerum iure earum est obcaecati, molestias suscipit perspiciatis. Aliquid perferendis numquam eligendiAliquid perferendis numquam eligendi.</p>
            <a href="#" class="button">Crabby &raquo;</a>
        </div>
        <div class="column editors-pick">
            <figure><img src="images/whale-icon.png" alt="Whale"></figure>
            <h2>The Whale</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem in officiis quae, excepturi soluta! Corrupti, assumenda, nemo.</p>
            <a href="#" class="button">Stuart &raquo;</a>
        </div>
        <div class="column">
            <figure>
                <img src="images/octopus-icon.png" alt="Octopus">
            </figure>
            <h2>The Octopus</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officiis alias nisi officia cum ea distinctio blanditiis aliquid, necessitatibus facilis doloribus!</p>
            <a href="#" class="button">Tenticals &raquo;</a>
        </div>
        <div class="column">
            <figure>
                <img src="images/crab-icon.png" alt="Crab">
            </figure>
            <h2>The Crab</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Neque nulla molestias, maiores commodi id, eligendi odio, perspiciatis quam similique saepe aut sint temporibus blanditiis eaque.</p>
            <a href="#" class="button">Crabby &raquo;</a>
        </div>
        <div class="column">
            <figure><img src="images/whale-icon.png" alt="Whale"></figure>
            <h2>The Whale</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laudantium earum, ad eveniet at ipsa est, officiis aliquid dolore sapiente vero adipisci iste voluptas. Autem impedit, eum odit! </p>
            <a href="#" class="button">Stuart &raquo;</a>
        </div>
        <div class="column">
            <figure>
                <img src="images/crab-icon.png" alt="Crab">
            </figure>
            <h2>The Crab</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Neque nulla molestias, maiores commodi id, eligendi odio, perspiciatis quam similique saepe aut sint temporibus blanditiis eaque.</p>
            <a href="#" class="button">Crabby &raquo;</a>
        </div>
        <div class="column">
            <figure><img src="images/whale-icon.png" alt="Whale"></figure>
            <h2>The Whale</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laudantium earum, ad eveniet at ipsa est, officiis aliquid dolore sapiente vero adipisci iste voluptas. Autem impedit, eum odit! </p>
            <a href="#" class="button">Stuart &raquo;</a>
        </div>
    </div><!-- end wrapper -->
</section>

#3 Understanding flex-grow, flex-shrink, flex-basis, and flex

flex-grow, flex-basis, flex-shrink, flex
--flex-grow (relational space, 1, 2, 3)
    --takes a unitless number
    --defines how a flex item can grow as teh flex container grows
    --its a proportional number for how to distribute flex items with extra space. 
    --So flex-grow 2 will take up twice the amount of extra space as flex-grow 1.
    --default is 0
    --no negative numbers
--flex-basis - basically a width property with a few differences
    --controls the length of the main-size (width in row mode, and height in column mode)
    --might be a good time to talk about main-size vs cross-size
        --really flex-basis isn't width, its the 'main-size'
    --accepts keywords that the width property doesn't accept 
        --auto - look at my width and height
        --content - size based on the content
--flex-shrink 
    --The flex-shrink property specifies how the item will shrink relative to the rest of the flexible items inside the same container.
    --basically the opposite of flex grow
--flex (shorthand for flex-grow, flex-shrink, flex-basis)


#4 More layout and more positioning

--justify-content --- very hard to do without 
    --space-between - distributes remaining space evenly between the inner items
    --space-around - distributes remaining space evenly around all items including the end caps
    --center - centers flex items
    --flex-end
    --flex-start (default)

-flexboxes inside of flexboxes to get the buttons at the bottom.

-Auto Margins - using auto-margins on flex-items is similar to floats inside except without all the drawbacks of floats! AND, you can float stuff down! You talking crazy? What? margin-top: auto According to the W3C spec: https://www.w3.org/TR/css-flexbox-1/#auto-margins (any positive free space is distributed to auto margins in that dimension.)




#5 Building the product listing
(it makes sense to look at another example to showoff some of the other features of flexbox)
-align-items
 - vertical alignment or alignment along the cross-axis. 
    --stretch (default)
    --flex-start
    --flex-end
    --center

--align-self (flex-items) 
    -- vertical alignment or alignment along the cross-axis - overrides align-items
    -- do this for the H2
    --properties
        --flex-start (default)
        --flex-end
        --center
        --stretch

--let's flip the flex-direction (just for this flex-container) and now look at how these properties no longer align vertically but they align horizontally. Because now the main-axis is up/down instead of Left/Right. The main size is now vertical and not horizontal. 
--Preview the vertical flex-diagram (flex-diagram-5.png)

<!-- 
===============
Product Listing
===============
-->
<section class="secondary-section grouping">
    <div class="wrapper produce-list">
        <div class="product-list-item">
            <figure>
                <img src="images/octopus-icon.svg" alt="Octopus">
            </figure>
            <h2>The Octopus</h2>
            <p>Lorem ipsum dolor sit.</p>
            <a href="#" class="button">Tenticals &raquo;</a>
        </div>
        <div class="product-list-item">
            <figure>
                <img src="images/crab-icon.svg" alt="Crab">
            </figure>
            <h2>The Crab</h2>
            <p>Lorem ipsum dolor sit.</p>
            <a href="#" class="button">Crabby &raquo;</a>
        </div>
        <div class="product-list-item">
            <figure><img src="images/whale-icon.svg" alt="Whale"></figure>
            <h2>The Whale</h2>
            <p>Lorem ipsum.</p>
            <a href="#" class="button">Stuart &raquo;</a>
        </div>
        <div class="product-list-item">
            <figure>
                <img src="images/octopus-icon.svg" alt="Octopus">
            </figure>
            <h2>The Octopus</h2>
            <p>Lorem ipsum dolor sit amet.</p>
            <a href="#" class="button">Tenticals &raquo;</a>
        </div>
        <div class="product-list-item">
            <figure>
                <img src="images/crab-icon.svg" alt="Crab">
            </figure>
            <h2>The Crab</h2>
            <p>Lorem ipsum dolor.</p>
            <a href="#" class="button">Crabby &raquo;</a>
        </div>
        <div class="product-list-item">
            <figure><img src="images/whale-icon.svg" alt="Whale"></figure>
            <h2>The Whale</h2>
            <p>Lorem ipsum.</p>
            <a href="#" class="button">Stuart &raquo;</a>
        </div>
    </div><!-- end wrapper -->
</section>
/****************
Product Listing
****************/
.product-list-item {
  border-bottom: 1px solid #766e65;
}
.product-list-item figure {
  width: 50px;
  margin-right: 20px;
}
.product-list-item h2 {
  margin: 0;
}
.product-list-item p {
  margin: 0;
}
.product-list-item .button {
  transform: scale(1);
  width: 130px;
}
##6 Flex-wrap and align-content
--flex-wrap - "change the flex-basis to larger than the flex-container" - now we can use "wrap"
    --add in 3-6 more columns.
    --default is 'no-wrap'
    --wrap
    --wrap-reverse
    --flips a switch to allow for align-content (talk about in the next section)

--align-content -- (flex-container) space between rows only when using flex-wrap
    --when multiple rows have wrapped and there ia extra space on the cross-axis
    --needs flex-wrap 
        -- in order to have multiple rows, flex-wrap must be set to wrap
        -- if only one row, alignment is deferred to align-items and align-self
    --needs height - in order to have extra space on the cross axis, usually that means there must be a height set
    --properties
        --flex-start (default)
        --flex-end
        --center
        --stretch
        --space-around (similar to justify-content)
        --space-between (similar to justify-content)
--let's flip the flex-direction (just for this flex-container) and now look at how these properties no longer align vertically but they align horizontally. Because now the main-axis is up/down instead of Left/Right. The main size is now vertical and not horizontal. 
--Preview the vertical flex-diagram (flex-diagram-5.png)


##7 Changing display order of content
--order (source order, -1, 0, 1, 2)
--flex-flow (shorthand for flex-wrap and flex-direction)


##8 Vendor Prefixes
--Using AutoPrefixr browser version
--Using AutoPrefixr in Gulp build chain






=
======
#Definitions#
flex = flex-grow, flex-shrink, flex-basis
flex-flow = flex-direction and flex-wrap.
=======

flex-container           ++++             flex-items
=====================================================
display           [x]                      order       [x] 
flex-direction    [x]                      flex-grow   [x]
flex-wrap         [x]                      flex-shrink [x]
flex-flow (sh)    [x]                      flex-basis  [x]
justify-content   [x]                      flex (sh)   [x]
align-items       [x]                      align-self  [x]
align-content     [x]                      