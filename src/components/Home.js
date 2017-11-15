import React from 'react';
import avatar from '../image/avatar.jpg';
import {} from 'react-bootstrap';
import '../css/index.css';
export default class Home extends React.Component{
    render(){
        return (
            <div>
                <h4><small>RECENT POSTS</small></h4>
                <hr/>
                <h2>GIỚI THIỆU</h2>
                <h5><span className="label label-danger">Self</span> <span class="label label-primary">live</span></h5><br/>
                <p>
                    Hi! Mình là Nguyễn Thanh Hải. Cảm ơn bạn đã ghé thăm blog của mình 	&lt;3<br/>
                    Um đôi nét về bản thân mình nhé, thì mình là một người ít nói, trầm tính, không thích chỗ đông người,
                    sợ đám đông nữa =))). Ai gặp mình lần đầu cũng bảo là 'Ơ sao thằng này nhìn mặt cứ lầm lầm lỳ lỳ đáng
                    ghét thế nhở'. Nhưng mà đó chỉ là máy người nhìn bề ngoài thôi. Còn khi đã thân với mình thì mình 
                    vui tính cực kỳ, trong nhóm bạn ai cũng bảo mình là đứa không bao giờ biết buồn đấy, vì lúc nào mồm cũng
                    như chim sáo vậy =))). Mình có thiên hướng hướng ngoại, ghét cái gì gò bó, quy cũ, luật lệ ... mình cực kỳ ghét luôn.
                    Mình cứ có cái tính hay làm trái lại những gì mà người ta nói lắm, tất nhiên là một vài chuyện mới có thể làm như vậy thôi
                    haha, một số chuyện mà làm trái lại thì hỏng hết =))). Tính khí thì hơi nóng tính, thất thường. Làm việc thì khi nào hứng
                    thì làm, không hứng thì thôi mình nhát thay ra luôn, Ngồi lỳ xem Dragon ball, Lol... Ý cuối cùng, thì mình sống với mọi 
                    người đến giờ luôn đặt cho mình một quy tắc, cũng như là phương châm sống vậy <strong>Cho đi đừng nghĩ</strong>.
                </p>

                <h4><small>RECENT POSTS</small></h4>
                <hr/>
                <h2>SỞ THÍCH</h2>
                <h5><span className="label label-danger">tourist</span> <span class="label label-primary">camp</span></h5><br/>
                <p>
                    Mình thích những chiếc xe đẹp, kiểu máy chiếc siêu xe như Lamborghini, Ferrari,... cứ nằm ao ước ngày nào
                    đó mình sẽ sở hữu những con xe đẹp như vậy =)) fighting!!! Vì thích xe nên mình rất thích đi du ngoạn nhiều nơi
                    hay còn gọi là phịch thủ(lời đồn) đấy máy bạn. Mình thích chạy trên những con đường không có khói bụi thành phố,
                    hai bên đường đầy rẫy những cây cối xanh tưới mát rượi, ngã bóng che nắng cho mình. Mình thích đi đâu đó thật ra,
                    gặp những người mới, sống chung với họ một vài ngày gì đó rồi quan sát họ sinh hoạt hằng ngày, được ăn đồ ăn của một 
                    người chưa từng quen biết. Chà chà chắc là được mến lắm vì mình là khách mà. Được thoải moái thả mình với thiên nhiên,
                    không chút vướng bận chuyện đời. Mỗi chuyến đi như là một chuyến phiêu lưu vậy. Mình phải chuẩn bị đối đầu với mọi tình huống
                    : Tai nạn, xì lốp xe, trời mưa, hết xăng,... Nghĩ đến đấy thôi là rùng mình rồi, nghĩ chứ thôi leo lên xe khách ngủ phát tới 
                    luôn không cần lo lắng gì. Haha =)) Nghĩ vậy chứ mà buồn, ví như mình lên đến Đà lạt mình nghĩ vẽ đẹp của đà lạt không bằng vẽ đẹp
                    của những nơi mình phải băng qua cộng lại để đến đà lạt. Thôi thì có điều kiện thì cứ chạy xe máy để trải nghiệm
                </p>
                <p>
                    Cách tốt nhất để nối thêm tình cảm, có lẽ là ngồi lại cùng nhau, cùng nhau nói chuyện, ăn uống, hay làm 
                    một thứ gì đó cùng nhau. Cảm giác ngồi lên lịch đi cắm trại, liệt kê cá thứ cần chuẩn bị, thực đơn món ăn, 
                    rồi cả đám chạy đôn chạy đáo mua đồ chuẩn bị thật là thích biết máy. Cùng nhau ngồi dưới đêm sao kể chuyện cười 
                    đùa, chơi trò chơi cùng nhau thật là thích biết bao. Mình cảm nhận được tình thân, tình bạn bè lúc đấy thật ấm áp biết 
                    bao. Sống giữa đời, ai cũng tất bật công việc, gia đình, bạn bè ngày một xa lánh nhau. Thế nên nếu được thì mong một lần 
                    cắm trại cùng nhau =).
                </p>

                <h4><small>RECENT POSTS</small></h4>
                <hr/>
                <h2>Ngẫm</h2>
                <h5><span className="label label-danger">tourist</span> <span class="label label-primary">camp</span></h5><br/>
                <ul className="list-group">
                    <li className="list-group-item">Cho đi đừng nghĩ</li>
                    <li className="list-group-item">Hãy cho tôi nụ cười khi tôi hướng về bạn</li>
                    <li className="list-group-item">Gọi là bạn thôi, đừng gọi bạn thân</li>
                    <li className="list-group-item">Là bạn nhưng sau tất cả, chỉ một chút hiểu lầm, bạn lại bỏ tôi 
                    đi mất. Tôi chắc rằng bạn không phải là người đầu tiên đối xử với tôi như thế. Gì chứ, sao không đến đánh tôi,
                    chửi tôi, và nói rằng tôi đã sai, và bạn đã giận tôi rất nhiều.</li>
                </ul>

                <h4><small>RECENT POSTS</small></h4>
                <hr/>
                <h2>Mẫu chuyện</h2>
                <h5><span class="label label-danger">story</span></h5><br/>
                <p>
                YÊU HAY LÀ THƯƠNG...
                Sống trên cuộc đời này, biết không em, đến sỏi đá cũng cần có nhau. Vậy nên, anh không yêu em, mà là anh thương em....

                ***

                Em có biết ngay tại thời khắc nhìn thấy em, anh đã nghe tim mình ngừng đập. Và rồi sau tất cả những suy nghĩ vụt qua, anh lại chẳng biết mình là ai giữa bộn bề đời em. Có ai đó ngoài kia đang nói gì về tình yêu. Với riêng anh, tình yêu đôi khi lại chẳng dừng chân cùng một lúc ở hai người, thế thì có gì phải đớn đau!!!

                Tình yêu đôi khi lại chẳng là nụ cười nơi cuối con đường, thế thì có gì phải xót xa!!!! Tình yêu đôi khi lại chẳng mang theo say đắm như trong tiểu thuyết, thế thì có gì phải hoài công!!! Tình yêu đôi khi lại chẳng như một sợi dây trói thắt tim người này, buộc lòng người kia. Tình yêu mang cùng một lúc niềm hạnh phúc tột cùng kèm theo mùi vị của ghen tuông rồi không quên ướm lên một chút hơi hám phản bội. Tình yêu không hứa về một con đường dài. Tình yêu là sự sở hữu, là ích kỷ, là mong muốn thuộc về nhau. Tình yêu là trải nghiệm rộng lớn về nước mắt, sự thất vọng và những nỗi đau. Tình yêu là sự hòa quyện giữa hai cá thể riêng biệt nhưng sẽ chẳng ai nói gì nhiều về ngày mai. Sống trên đời này, biết không em, đến sỏi đá cũng cần có nhau. Vậy nên, anh không yêu em, mà là anh thương em.

                Ngay cả khi anh viết cho em chữ thương này, nó đã dài hơn rất nhiều so với chữ yêu vốn tưởng chừng như là vĩnh cửu. Tình thương vượt qua ranh giới của tình yêu. Thương không đòi hỏi về sự chiếm hữu. Thương không thiết tha gì về danh phận nơi bộn bề cuộc đời người còn lại. Thương không lấy sự ích kỷ để đong đếm. Mà đơn giản chỉ là nụ cười người này là hạnh phúc của người kia. Thương không quan tâm đến con đường dài hay ngắn, chỉ cần đứng bên nhau thôi, hạnh phúc cũng đong đầy. Thương là thứ vô hình giá trị nhất anh có thể dành cho em.

                Để khi em khóc, luôn có anh kề bên.

                Để khi em nghĩ cả thế giới quay lưng lại với mình, cũng sẽ có anh đưa em về.

                Để khi mọi giá trị vật chất quay cuồng, anh nhận ra mình là tinh thần của em.

                Và để khi em yêu một người khác, anh vẫn sẽ sống cuộc sống của anh,

                Và thương em nguyên vẹn như vậy......
                </p>
            </div>
            
        );
    }
}